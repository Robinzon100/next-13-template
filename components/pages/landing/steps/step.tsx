"use client";

import Image from "next/image";




interface Props {
    header: string;
    description: string;
    image: string;
    icon: string;
}



const Step = (props: Props) => {
    return (
        <div className="card">
            <div>
                <h2>{props.header}</h2>
                <p>{props.description}</p>
            </div>
            <div className="image" style={{ position: "relative" }}>
                <Image
                    src={props.image}
                    blurDataURL={`/_next/image?url=${props.image}&w=16&q=10`}
                    placeholder="blur"
                    alt={`image of ${props.header}`}
                    quality={90}
                    fill
                    style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        maxHeight: "auto",
                    }}
                />

            </div>
        </div >
    );
};

export default Step;
