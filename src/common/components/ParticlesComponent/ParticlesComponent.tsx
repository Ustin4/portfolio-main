import React from 'react';
import Particles from "react-particles";

const ParticlesComponent: React.FC = () => {
    const options = {
        particles: {
            number: {
                value: 50
            },
            size: {
                value: 3
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
    }

    return (
        <Particles options={options}/>
    )

};

export default ParticlesComponent;