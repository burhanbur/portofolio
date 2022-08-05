import self from "../img/self-copy.png"
import siap from "../img/siap.png"
import ods from "../img/ods.png"
import central from "../img/central.png"
import pkm from "../img/pkm.png"
import chemfyi from "../img/chemfyi.png"
import hazwaste from "../img/hazwaste.png"
import hris from "../img/hris.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Burhan",
    lastName: "Mafazi",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by chocolate'
        },
        {
            emoji: '🌎',
            text: 'based in the JKT'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Pertamina University"
        },
        {
            emoji: "📧",
            text: "burhanburdev@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://www.facebook.com/burhan.mafazi/",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://www.instagram.com/burhanmaf/",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/burhanbur",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/burhanmafazi/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com/burhanbur",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Burhan. I'm a software engineer for Pertamina University. I studied Engineering Informatics at Gunadarma University, I enjoy to coding in dark mode with a cup of chocolate ☕. You should hire me!",
    skills:
    {
        proficientWith: ['laravel', 'codeigniter 3', 'nodejs', 'golang', 'linux'],
        exposedTo: ['reactjs', 'nextjs', 'python']
    }
    ,
    hobbies: [
        {
            label: 'badminton',
            emoji: '🏸'
        },
        {
            label: 'traveling',
            emoji: '🚀'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'photography',
            emoji: '📸'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Sistem Absensi Pegawai",
            live: "https://siap.universitaspertamina.ac.id/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/burhanbur/new-siap", // this should be a link to the **repository** of the project, where the code is hosted.
            image: siap
        },
        {
            title: "HRIS",
            live: "https://hurryup.universitaspertamina.ac.id/",
            source: "https://github.com/burhanbur/hurryup",
            image: hris
        },
        {
            title: "Central (SSO)",
            live: "https://github.com/burhanbur",
            source: "https://github.com/burhanbur/central",
            image: central
        },
        {
            title: "Chemfyi Games",
            live: "https://play.google.com/store/apps/details?id=com.universitaspertamina_chemfyi_mobile",
            source: "https://github.com/burhanbur",
            image: chemfyi
        },
        {
            title: "Online Disciplinary System (ODS)",
            live: "https://ods.universitaspertamina.ac.id/",
            source: "https://github.com/burhanbur",
            image: ods
        },
        {
            title: "Events",
            live: "http://pkm-cs.universitaspertamina.ac.id/",
            source: "https://github.com/burhanbur",
            image: pkm
        },
        {
            title: "Hazwaste",
            live: "https://play.google.com/store/apps/details?id=com.ben.hazwaste_mobile",
            source: "https://github.com/burhanbur",
            image: hazwaste
        },
    ]
}