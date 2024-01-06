import fetch from 'node-fetch';

async function testing() {
    const res = await fetch("http://www.lawrence-gym.tk/")
    console.log(res)
}

testing()


