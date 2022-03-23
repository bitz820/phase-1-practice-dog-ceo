console.log('%c HI', 'color: firebrick')
window.addEventListener("DOMContentLoaded", () => {

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(data => {
            data.message.forEach(message => {
                const img = document.createElement('img')
                const container = document.querySelector('#dog-image-container')
                img.src = message
                container.append(img)
            }
            )
        })

        function selectLetter(){
            const letterSelected = document.getElementById("breed-dropdown")
                letterSelected.addEventListener("change", (e) => {
                    const singleLetter = e.target.value
                    const wholeList = document.querySelectorAll("li")
                    wholeList.forEach((li) => {
                        if (li.innerText.charAt(0) === singleLetter){
                            li.style.display = ""
                        }else{
                            li.style.display = 'none'
                        }
                    })
                })
        }

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(data => {
            for (const breed in data.message) {
                const dog = document.createElement('li')
                const list = document.querySelector('#dog-breeds')
                dog.textContent = breed
                list.append(dog)
                dog.addEventListener("click", () => {
                    dog.style.color = "blue"
                })
                selectLetter()
            }
        }
        )

    })