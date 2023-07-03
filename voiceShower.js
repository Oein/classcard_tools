setInterval(() => {Array.from(document.querySelectorAll(`.flip-card-front > * > div.hidden`)).map(j => j.classList.remove("hidden"))},50)
