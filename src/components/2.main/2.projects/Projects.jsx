import "./Projects.css";
import Golf_Mk8 from "../../../assets/images/pexels-omar-ramadan-1739260-25857424.jpg";
import Mercedes from "../../../assets/images/pexels-wijs-wise-136435282-12356888.jpg";
import Ferrari from "../../../assets/images/pexels-mikebirdy-9761026.jpg";
import Merc from "../../../assets/images/pexels-mikebirdy-16511358.jpg";
import Nyumba from "../../../assets/images/pexels-cottonbro-4604703.jpg";
import House from "../../../assets/images/empty-square-modern-architecture.jpg";

const Projects = () => {
  let items = [
    {
      index: 1,
      name: "Golf_Mk8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ipsa.",
      image: Golf_Mk8,
    },
    {
      index: 2,
      name: "Mercedes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ipsa.",
      image: Mercedes,
    },
    {
      index: 3,
      name: "La-Ferrari",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ipsa.",
      image: Ferrari,
    },
    {
      index: 4,
      name: "Benz",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ipsa.",
      image: Merc,
    },
    {
      index: 5,
      name: "Appartments",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ipsa.",
      image: Nyumba,
    },
    {
      index: 6,
      name: "Highrise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ipsa.",
      image: House,
    },
  ];
  return (
    <>
      {/* <div className="projects-title">
        <p>Projects</p>
      </div> */}
      <div className="projects-container">
        {/* {items.map((item) => ())} */}
        {items.map((item) => (
          <div className="projects-content-container" key={item.index}>
            <div className="projects-content">
              <img src={item.image} alt="Image" className="project-images" />
            </div>
            <div className="projects-content-text">
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
