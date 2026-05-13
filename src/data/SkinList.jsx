import img1 from "../assets/d1f4f00c868dc5431325b5a518e11c7b.jpg"
import img2 from '../assets/3d8066677ee8530b15f25384ce9d265a.jpg'
import img3 from '../assets/ff97e860ac34b8b738e7456525ed6484.jpg'
import img4 from '../assets/e24eb85eb0908bbb8ae361e55c726382.jpg'
import img5 from '../assets/7a4b3bf29988256ed408c11f72804ecc.jpg'
const SkinList = [
    {path: "/new",
     name: "new",
     image: img1,
     subLinks: [
     {path: "/lip-butter", name: "butter cake lip butter"},
     {path: "/pomegranate", name: "pomegranate lip butter"}
     ],

    },
    {
    path: "/lips",
    name: "lips",
    image: img2,
    subLinks: [
        {path: "/butter", name: "lip butter"},
        {path: "/oil", name: "lip oil"},
        {path: "/care", name: "care"}
    ],
    },
    {
        path: "/face",
        name: "face",
        image: img3,
        subLinks: [
            {path: "/cleansers", name: "cleansers"},
            {path: "/toners", name: "toners"},
            {path: "/serums", name: "serums"},
            {path: "/moistures", name: "moistures"}
        ],
    },
    {path: "/best-sellers", image: img4, name: "best sellers"},
    {path: "/bundles-sets", image: img5, name: "bundles & sets"}

]


export default SkinList