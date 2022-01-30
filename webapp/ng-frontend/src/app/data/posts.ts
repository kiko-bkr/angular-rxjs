import { Post } from 'src/app/models/post.model';

export const POSTS: Post[] = [
    {
        id: 1,
        title: 'First post',
        body: 'This is my first ever post on this website!'
    },
    {
        id: 2,
        title: 'Lorem Ipsum',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum est nec 
        imperdiet elementum. Nunc sed quam facilisis, rhoncus nisl vel, volutpat arcu. Pellentesque 
        dapibus non lorem at sagittis. Quisque dictum, felis vitae egestas feugiat, ante leo consequat 
        lacus, id euismod sem nibh a est. Praesent non vulputate purus. Sed at leo ut odio tincidunt tempor 
        sit amet a sem. Ut mollis ut tortor eu imperdiet. Curabitur eget pretium sapien. Proin magna massa, 
        laoreet nec mi vitae, tristique lobortis nisi. Nullam lobortis ipsum non vulputate faucibus.`
    },
    {
        id: 3,
        title: 'RxJS',
        body: `RxJS is a library for reactive programming using Observables, to make it easier to compose 
        asynchronous or callback-based code. This project is a rewrite of Reactive-Extensions/RxJS with better 
        performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, 
        with some breaking changes that reduce the API surface`
    }
];