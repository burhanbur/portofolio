import self from "../img/self.png"
import siap from "../img/siap.png"
import ods from "../img/ods.png"
import central from "../img/central.png"
import pkm from "../img/pkm.png"
import chemfyi from "../img/chemfyi.png"
import hazwaste from "../img/hazwaste.png"
import hris from "../img/hris.png"

import monic from "../img/monic.png"
import pmb from "../img/pmb.png"
import minerbaone from "../img/minerbaone.png"
import build_hold from "../img/build-hold.png"
import uperpay from "../img/uperpay.png"
import odin from "../img/odin.png"

import laravel from "../icon/laravel.svg"
import yii from "../icon/yii.svg"
import codeigniter from "../icon/codeigniter.svg"
import nodejs from "../icon/nodejs.svg"
import go from "../icon/go.svg"
import postgresql from "../icon/postgresql.svg"
import mysql from "../icon/mysql.svg"
import react from "../icon/react.svg"
import vue from "../icon/vue.svg"
import angular from "../icon/angular.svg"
import flutter from "../icon/flutter.svg"
import django from "../icon/django.svg"
import flask from "../icon/flask.svg"
import dotnet from "../icon/dotnet.svg"
import mongodb from "../icon/mongodb.svg"
import redis from "../icon/redis.svg"
import sql from "../icon/sql.svg"

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
    initials: "bm", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by Chocolate'
        },
        {
            emoji: '🌎',
            text: 'Based in Jakarta, ID'
        },
        {
            emoji: "💼",
            text: "Software Engineer"
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
            link: "https://gitlab.com/burhanburdev",
            icon: "fa fa-gitlab",
            label: 'gitlab'
        },
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
    bio: "As a Software Engineer, I aim to build reliable and innovative solutions that solve real-world problems. I enjoy turning ideas into useful and impactful products while focusing on scalability and great user experiences. I believe in continuous learning, collaboration, and improving through feedback to create tools that are intuitive and valuable for users.",
    skills:
    {
        proficientWith: [
            {
              icon: laravel,
              label: "Laravel",
            },
            {
              icon: yii,
              label: "Yii",
            },
            {
              icon: codeigniter,
              label: "Codeigniter",
            },
            {
              icon: nodejs,
              label: "Node.js",
            },
            {
              icon: go,
              label: "Go",
            },
            {
              icon: postgresql,
              label: "PostgreSQL",
            },
            {
              icon: mysql,
              label: "MySQL",
            },
          ],
          exposedTo: [
            {
              icon: react,
              label: "React",
            },
            {
              icon: vue,
              label: "Vue",
            },
            {
              icon: angular,
              label: "Angular",
            },
            {
              icon: flutter,
              label: "Flutter",
            },
            {
              icon: django,
              label: "Django",
            },
            {
              icon: flask,
              label: "Flask",
            },
            {
              icon: dotnet,
              label: "ASP.NET MVC",
            },
            {
              icon: mongodb,
              label: "MongoDB",
            },
            {
              icon: redis,
              label: "Redis",
            },
            {
              icon: sql,
              label: "SQL Server",
            },
        ],
    },
    hobbies: [
        {
            label: 'Badminton',
            emoji: '🏸'
        },
        {
            label: 'Traveling',
            emoji: '🚀'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Photography',
            emoji: '📸'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Monitoring Contract (MONIC)",
            description: "Application designed to automatically monitor contracts for Pertamina Hulu Kalimantan Timur (PHKT). This application streamlines the process of tracking contract status, supporting documents, and transaction history, ensuring efficiency and accuracy in the company’s contract management.",
            image: monic
        },
        {
            title: "New Student Admission (PMB)",
            description: "Developed to support the new student admission process for Universitas Pertamina (UPER). This application includes features such as filters, data analysis graphs, and integrated registration management, simplifying campus administration and prospective students’ registration.",
            image: pmb
        },
        {
            title: "Integrated Digital System (MinerbaOne)",
            description: "Integrated digital platform for the Ministry of Energy and Mineral Resources (ESDM) that supports the management of licensing data, planning, reporting, and audits related to minerals and coal. This application is designed to enhance transparency, efficiency, and easy access to data in the mining sector.",
            image: minerbaone
        },
        {
            title: "Build Hold Application",
            description: "This application designed to support calculation processes in the field of drilling engineering. With features such as Build-Up Rate (BUR) calculation and result downloading, this application provides an efficient solution for determining the optimal drilling path based on technical parameters such as Kick Off Point (KOP) and Target TVD.",
            image: build_hold
        },
        {
            title: "Payment Gateway (UPERPAY)",
            description: "UPERPAY application is a digital payment system specifically designed for Universitas Pertamina. With a modern interface, this application facilitates payment transactions, tracks billing history, and displays revenue statistics, providing ease and transparency for users.",
            image: uperpay
        },
        {
            title: "Online Disciplinary System (ODIN)",
            description: "ODIN (Online Disciplinary Student) application was developed to help Universitas Pertamina monitor and manage student academic and ethical violations data. With interactive visual reports, this application supports quick and data-driven decision-making.",
            image: odin
        },
        // {
        //     title: "HRIS",
        //     live: "https://hurryup.universitaspertamina.ac.id/",
        //     source: "https://github.com/burhanbur/hurryup",
        //     image: hris
        // },
        // {
        //     title: "Central (SSO)",
        //     live: "https://github.com/burhanbur",
        //     source: "https://github.com/burhanbur/central",
        //     image: central
        // },
        // {
        //     title: "Chemfyi Games",
        //     live: "https://play.google.com/store/apps/details?id=com.universitaspertamina_chemfyi_mobile",
        //     source: "https://github.com/burhanbur",
        //     image: chemfyi
        // },
        // {
        //     title: "Online Disciplinary System (ODS)",
        //     live: "https://ods.universitaspertamina.ac.id/",
        //     source: "https://github.com/burhanbur",
        //     image: ods
        // },
        // {
        //     title: "Events",
        //     live: "http://pkm-cs.universitaspertamina.ac.id/",
        //     source: "https://github.com/burhanbur",
        //     image: pkm
        // },
        // {
        //     title: "Hazwaste",
        //     live: "https://play.google.com/store/apps/details?id=com.ben.hazwaste_mobile",
        //     source: "https://github.com/burhanbur",
        //     image: hazwaste
        // },
    ]
}