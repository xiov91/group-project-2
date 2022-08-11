var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Kris",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Cronenberg",
                date: Date.now(),
                content: "yoyoyo"
            },
            {
                author: "SisterSister",
                date: Date.now(),
                content: "chill bro"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "crackers are delicious"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "esp with peanut butter"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}