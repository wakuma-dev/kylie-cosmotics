
import img1 from '../assets/289f15493a485def8a3f3aca2e13f349.jpg'
import img2 from '../assets/2743a8dac90f6de3a49801a03ed5ff7f.jpg'
import img3 from '../assets/9a801dafc9157e6a9a1eaa51be53276f.jpg'
import img4 from '../assets/0968eacc07cab3058cd8ece4e1d1c722.jpg'
import img5 from '../assets/b4613cc593492c8e71e47d56e957888a.jpg'
const CosemticsLinks = [
  {
    path: "/new",
    image: img1,
    name: "new arrival",
    subLinks: [
      { path: "/cloud-balm", name: "cloud balm" },
      {
        path: "/travel-sized-hair-body-mists",
        name: "travel-sized hair & body mists ",
      },
      {
        path: "cool-toned-precision-pout-lip-liners",
        name: "cool-toned precision pout lip liners ",
      },
      { path: "butter-cake-lip-butter", name: "butter cake lip butter " },
    ],
  },
  {path: "/best-sellers", image: img2, name: "best sellers"},
  {
    path: "/lips", image: img5,  name: "lips",
    subLinks: [
        {path: "/lip-kits", name: "lip kits"},
        {path: "/lipsticks", name: "lipsticks"},
        {path: "/liquid-lipsticks", name: "liquid lipsticks"},
        {path: "/lip-plumpers", name: "lip plumpers"},
        {path: "/lip-stains", name: "lip stains"},
        {path: "/lip-Tints", name: "lip tints"}




 
    ],
  },
  {path: "/eyes-and-brows", image: img3,  name: "eyes & brows",
  subLinks: [
    {path: "/mascaras", name: "mascaras"},
    {path: "/palettes", name: "palettes"},
    {path: "/eyeliners", name: "eyeliners"},
    {path: "/brows", name: "brows"}
 ]
},
{path: "/featured", image: img4, name: "featured",
subLinks: [
        {path: "/bundles-sets", name: "bundles & sets"},
        {path: "/lip-duos", name: "lip duos"},
        {path: "/kylie's-favorites", name: "kylie's favorites"},
        {path: "/king-kylie-colllection", name: "king kylie collection"},
        {path: "/online-exclusives", name: "online exclusives"},
        {path: "/makeup-bruhes", name: "makeup brushes & accessories"},
        {path: "/travel-essential", name: "travel essential"}

    ]
}
];

export default CosemticsLinks