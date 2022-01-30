# angular-rxjs

## Overview
First trial at building an Angular SPA using the reactive programming paradigm

I used the following main technologies:
- Angular 13.1.0
- RxJS

My goal was to create an Angular web app where I do not use a state management library; instead, I create the reactive asynchronous data streams on my own. My motivation also included using Angular's `async` pipe instead of manual subscriptions, as a 'best practice'.

I have made a functioning posts/comments application. I managed to avoid manual subscriptions almost completely, except for one instance: resetting a form reactively. It is a future Issue to somehow achieve that with the `async` pipe.

As I mentioned, one of the reasons why I am trying to make do with the `async` pipe exclusively is because it is a better method of asynchronous data stream consumption. After all it prompts Angular to automatically unsubscribe on the component's destruction. It also removes boilerplate imperative (and unreliable!) imperative code.

However, the main reason and motivation was a [talk at ng-conf 2019](https://youtu.be/-4cwkHNguXE?t=374) where [Mike Pearson](https://github.com/mfp22) demonstrated one possible severe pitfall of manual subscriptions: being out of sync with received data.

Therefore I took it upon myself to create my first RxJS x Angular application, and also try my best not only to stick to the reactive paradigm, but also to avoid using the `subscribe()` method.

## Resources

Resources that helped me get into the reactive programming mindset:
- this [intro video](https://www.youtube.com/watch?v=Bme_RiT9CK4&t=802s) by [Paco van der Linden](https://github.com/pavadeli)
- this [tutorial](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) by [André Staltz](https://gist.github.com/staltz)