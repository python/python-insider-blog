---
title: 'Of polling, futures and parallel execution'
publishDate: '2011-03-24'
updatedDate: '2011-04-11'
author: Antoine P.
description: 'One of the big concerns in modern computing is saving power. It matters a lot in portable devices (laptops, tablets, handhelds). Your modern CPU is able to e...'
tags: []
published: true
legacyUrl: /2011/03/of-polling-futures-and-parallel.html
---

One of the big concerns in modern computing is saving power. It matters a lot in portable devices (laptops, tablets, handhelds). Your modern CPU is able to enter a various number of low-power states when it is idle. The longer it stays idle, the deeper the low-power state, and the lower the energy consumed, and, therefore, the longer the battery life of your device on a single charge.

Low-power states have an enemy: polling. When a task periodically wakes up the CPU, even for something as trivial as reading a memory location to check for potential changes, the CPU leaves the low-power state, wakes up all its internal structures, and will only re-enter a low-power state long after your menial periodic wakeup has finished its intended work. This kills battery life. Intel itself [feels concerned](http://www.lesswatts.org/projects/applications-power-management/avoid-pulling.php).

Python 3.2 comes with a new standard module to launch concurrent tasks and wait for them to end: the [concurrent.futures](http://docs.python.org/dev/library/concurrent.futures.html) module. While perusing its code, I noticed that it used polling in some of its worker threads and processes. I'm saying "some of", as the implementation differs between the [ThreadPoolExecutor](http://docs.python.org/dev/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor) and the [ProcessPoolExecutor](http://docs.python.org/dev/library/concurrent.futures.html#concurrent.futures.ProcessPoolExecutor). The former did polling in each of its worker threads, while the latter only did so in a single thread named the queue management thread, which is used to communicate with the worker processes.

Polling here was only used for one thing: detecting when the shutdown procedure should be started. Other tasks such as queueing callables or fetching results from previously queued callables use synchronized queue objects. These queue objects come from either the threading or multiprocessing module depending on which executor implementation you are using.

So, I came up with [a simple solution](http://bugs.python.org/issue11635): I replaced this polling with a sentinel, the built-in sentinel named None. When a queue receives None, one waiting worker is naturally woken up and checks whether it should shutdown or not. In the ProcessPoolExecutor, there is a small complication as we need to wake up N worker processes in addition to the single queue management thread.

In my initial patch, I still had a polling timeout; a very large one (10 minutes) so that the workers would wake up at some point. The large timeout existed in case the code is buggy and they didn't get a shutdown notification through the aforementioned sentinel when they should. Out of curiousity, I dove into the multiprocessing source code and came to another interesting observation: under Windows, [multiprocessing.Queue.get()](http://docs.python.org/dev/library/multiprocessing.html#multiprocessing.Queue.get) with a non-zero, non-infinite timeout uses...polling (for which I opened [issue 11668](http://bugs.python.org/issue11668)). It uses an interesting high-frequency kind of polling, since it starts with a one millisecond timeout which is incremented at every loop iteration.

Needless to say that still using a timeout, however huge, would render my patch useless under Windows since the way that timeout is implemented would involve wakeups every millisecond. So I bit the bullet and removed the huge polling timeout. My latest patch doesn't use a timeout at all, and therefore should cause no periodic wakeups, regardless of the platform.

Historically speaking, before Python 3.2, every timeout facility in the threading module, and therefore in much of multiprocessing since multiprocessing itself uses worker threads for various tasks, used polling. This was fixed in [issue 7316](http://bugs.python.org/issue7316).
