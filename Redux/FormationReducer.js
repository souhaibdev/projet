const initial_state = {
  Formations: [
  { 
    id: 1, 
    name: "React js", 
    domain: "Web", 
    description: "Learn how to build modern websites", 
    price: 299, 
    rating: 4.5,
    image: "/img-react.png",
    publishedDate: "2026-01-10",
    duration: "36h",        
    center: "FormInova Center",
    vidio:"/react vidio.mp4",
  },
  { 
    id: 2, 
    name: "Digital Marketing", 
    domain: "Marketing", 
    description: "Master online marketing strategies", 
    price: 199, 
    rating: 4,
    image:"/marketing.jpg",
    publishedDate: "2026-01-05",
    duration: "24h",        
    center: "Marketing Hub"
  },
  { 
    id: 3, 
    name: "UX/UI Design", 
    domain: "Design", 
    description: "Learn how to create attractive user interfaces", 
    price: 249, 
    rating: 4.2,
    image:"/design.jpg",
    publishedDate: "2026-01-08",
    duration: "30h",       
    center: "Creative Studio"
  },
  { 
    id: 4, 
    name: "Data Science", 
    domain: "Data", 
    description: "Analyze and visualize data effectively", 
    price: 349, 
    rating: 4.8,
    image:"/datas.webp",
    publishedDate: "2026-01-12",
    duration: "48h",        
    center: "Data Academy"
  },
  { 
    id: 5, 
    name: "Cybersecurity", 
    domain: "Security", 
    description: "Protect systems and data", 
    price: 299, 
    rating: 4.3,
    image:"/cyber.jpeg",
    publishedDate: "2026-01-03",
    duration: "36h",       
    center: "CyberTech Institute"
  },
  { 
    id: 6, 
    name: "Mobile App Development", 
    domain: "Web", 
    description: "Build mobile apps for Android and iOS", 
    price: 279, 
    rating: 4.6,
    image:"/mobile.webp",
    publishedDate: "2026-01-07",
    duration: "42h",        
    center: "AppLab Center"
  },
]
,
  filteredFormation: [],
  loading: false,
  error: null,
};

const formationReducer = (state=initial_state,action) => {
    switch(action.type){
        case "SET_AFFICHE":
            return{
                ...state,
                filteredFormation:state.Formations,
            }
          case "SET_DOMAINFILTRER":
            return {
                ...state,
                filteredFormation:action.payload.trim() === ""
                ? state.Formations
                : state.Formations.filter((p) => (
            p.domain.toLowerCase().includes(action.payload.toLowerCase())
          )
          ) };
        case "SORT_BY_RATING":
          const sorted = [...state.filteredFormation].sort((a, b) =>
          action.payload === "asc" ? a.rating - b.rating : b.rating - a.rating
        );
          return {
            ...state,
            filteredFormation: sorted,
          };
        default:
            return state;
    }
}
export default formationReducer;