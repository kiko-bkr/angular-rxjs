import { Comment } from 'src/app/models/comment.model';

export const COMMENTS: Comment[] = [
    {
        "id": 1,
        "postId": 1,
        "title": "Awesome!",
        "positive": true,
        "body": "Welcome to the platform."
    },
    {
        "id": 2,
        "postId": 2,
        "title": "Curabitur...",
        "positive": true,
        "body": "Curabitur luctus ipsum eget turpis faucibus vulputate. Fusce consectetur, justo ac lacinia gravida, nulla ipsum vestibulum lorem, quis facilisis orci."
    },
    {
        "id": 3,
        "postId": 2,
        "title": "Maecenas diam ipsum?",
        "positive": false,
        "body": "Ultrices vitae orci vitae, porttitor lobortis odio. Quisque eu scelerisque eros, id dictum odio. Aenean lacinia bibendum dui, consequat tristique tellus porta ac. Nam accumsan ac libero non varius. Nam et elit tellus. Sed condimentum at odio."
    },
    {
        "id": 4,
        "postId": 1,
        "title": "Great!",
        "positive": true,
        "body": "Have fun here."
    },
    {
        "id": 5,
        "postId": 2,
        "title": "Morbi euismod",
        "positive": true,
        "body": "Erat ex, vulputate mollis velit tincidunt sed. Quisque sed est sed justo aliquet euismod quis vitae magna. Nam pretium, urna lacinia eleifend dignissim, dui sem semper mi, sed porttitor neque enim nec eros. Cras eget tincidunt velit. Vestibulum."
    }
]