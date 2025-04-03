const API_KEY="dcOq6DfyT92sUcJNYno3rfzgJlur0l9o8kZNzbx4";
const url="https://api.nasa.gov/planetary/apod?api_key=${API_KEY}";
async function fetchAPOD(){
    try {
    const respone=await fetch(API_KEY);
    const data=await response.json();
    document.querySelector("title").textcontent=data.title;
    
    document.getElementById("explanation").textContent = data.explanation;

        if (data.media_type === "image") {
            document.getElementById("apodImage").src = data.url;
            document.getElementById("apodImage").style.display = "block";
            document.getElementById("apodVideo").style.display = "none";
        } else if (data.media_type === "video") {
            document.getElementById("apodVideo").src = data.url;
            document.getElementById("apodVideo").style.display = "block";
            document.getElementById("apodImage").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching APOD data:", error);
    }

}


    
