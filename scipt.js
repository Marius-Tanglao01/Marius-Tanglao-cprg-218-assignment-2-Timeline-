const projectInfo = {
  Early2022: {
    title: "Early 2022",
    text: "These X/Twitter header designs were one of the early phases of my wonderful journey in graphic design. I had zero connections and zero clients. What did I do? I created passion projects to gain some design friends and to improve my skills. These header designs were made for some of my favorite designers and artists. As you can see, they are unified with one style. This is basically a graphic design style I made up called Core. This design style was originally made in a video game called Geometry Dash which I was super addicted to. The style is characterized by maximalist shapes, technology assets, and bold gradients. Around February 2022, I got the idea of putting the Geometry Dash art style into graphic design. This opened the floodgates of me using it again and again, refining it after each new project, until people on Twitter associated me with that style. The designs on the left are the first core-styled headers I made for some designers I admired namely @H3ADB0T, @MikaeliFX, and @MindCap.",
  },
  Mid2022: {
    title: "Mid 2022",
    text: " Around May 2022 I continued to make some more core-styled Twitter headers for some more of my favorite designers. The style now seems to be evolving into a more detailed-looking direction with more gradients and more tech shapes. Fun fact: the Zero Twitter header (the one in the middle) has over 600 layers in Photoshop, which makes it one of the biggest PSD files I have. Each of these headers you see on your right takes about 4 weeks to complete because of their sheer complexity using the pen tool and gradient tool in Photoshop. These headers were made for @RockPaperRizz, @designsfromzero, and Manix648. ",
  },
  Late2022Early2023: {
    title: "Late 2022-Early 2023",
    text: "The next batch of Twitter headers was made starting in December 2022. The core style has now evolved into something more sleek and clean. Inspired by graphic designer @Mafiaarts7, I decided to go for a more simplified and bold approach for these headers. With a focus on lighting and highlights, the style seems to have matured with its chaotic roots but still retains its maximalist aspects. I personally love the fact that my highlights improved which produced more dramatic results. Again these are passion projects made for designers I admire. These headers were made for @singraft14, @ardizzle06, and myself. ",
  },
  Late2023: {
    title: "Late 2023",
    text: "The core-styled designs are no longer Twitter headers. This is an Advisement project I made for Darmoshark, a gaming peripherals brand based in China. This project centers on the creation of advertising designs for Darmoshark's flagship product, namely the Darmoshark M3 gaming mouse, including its 4k edition. This is one of my favorite graphic design projects because I finally get to use the style I was building up for a commercial project. The more refined late 2022 - early 2023 version of the core style. The best aspects of the core are used like dynamic highlights, bold gradients, and tech assets. The full project case study can be viewed ",
  },
};

function showImage(imageId) {
  const images = document.querySelectorAll(".image");
  images.forEach((img) => {
    img.style.display = "none";
    img.classList.remove("active");
  });

  const selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.style.display = "block";
    selectedImage.classList.add("active");
  }

  const info = projectInfo[imageId];
  if (info) {
    if (imageId == "Late2023") {
      const link = document.createElement("a");
      link.textContent = "here.";
      link.href =
        "https://www.behance.net/gallery/186048253/Darmoshark-Gaming-Product-Advertisements";
      link.target = "_blank";
      document.getElementById("project-title").textContent = info.title;
      document.getElementById("dynamic-text").innerHTML = info.text;
      document.getElementById("dynamic-text").appendChild(link);
    } else {
      document.getElementById("project-title").textContent = info.title;
      document.getElementById("dynamic-text").textContent = info.text;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showImage("Early2022");
});
