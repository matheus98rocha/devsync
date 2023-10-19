import AboutCard from "../about/about-card.component";
import { SectionCardProps } from "./section-card.types";

const SectionCard = ({ mock }: SectionCardProps) => (
    <div className="px-8 grid grid-cols-1 xl:grid-cols-2 gap-10">
        {
            mock.map((card, index: number) => (
                <div key={index}>
                    <AboutCard
                        title={card.title}
                        text={card.text}
                        image={card.image}
                    />
                </div>
            ))
        }
    </div>
);

export default SectionCard;