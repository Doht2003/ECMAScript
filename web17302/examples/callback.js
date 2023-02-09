function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(10);
        script.onerror = () => reject(new Error('Load script failed'));
        document.head.append(script);
    })
} 

loadScript("https://javascript.info/callbacks")
    .then((data) => data + 20)
    .then((data2) => console.log(data2))
    .catch((error) => console.log(error))