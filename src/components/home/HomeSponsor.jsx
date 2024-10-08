import React, { useEffect, useRef } from "react";

const HomeSponsor = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    // Duplicate the logos
    const logosElement = logosRef.current;
    if (logosElement) {
      const copy = logosElement.cloneNode(true);
      logosElement.parentNode.appendChild(copy);
    }
  }, []);

  const sponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      image: "images/sponsors/sponsor-1-light.png",
    },
    {
      id: 2,
      name: "Sponsor 2",
      image: "images/sponsors/sponsor-2-light.png",
    },
    {
      id: 3,
      name: "Sponsor 3",
      image: "images/sponsors/sponsor-3-light.png",
    },
    {
      id: 4,
      name: "Sponsor 4",
      image: "images/sponsors/sponsor-4-light.png",
    },
    {
      id: 5,
      name: "Sponsor 5",
      image: "images/sponsors/sponsor-5-light.png",
    },
    {
      id: 6,
      name: "Sponsor 6",
      image: "images/sponsors/sponsor-6-light.png",
    },
    {
      id: 7,
      name: "Sponsor 7",
      image: "images/sponsors/sponsor-7-light.png",
    },
    {
      id: 8,
      name: "Sponsor 8",
      image: "images/sponsors/sponsor-8-light.png",
    },
    {
      id: 9,
      name: "Sponsor 9",
      image: "images/sponsors/sponsor-9-light.png",
    },
    {
      id: 10,
      name: "Sponsor 10",
      image: "images/sponsors/sponsor-10-light.png",
    },
  ];
  return (
    <>
      <section class="sponsors">
        <div class="container">
          <div className="sponsor-logos">
            {sponsors.map((sponsor) => (
              <div className="logos-slide" key={sponsor.id}>
                <img src={sponsor.image} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSponsor;
