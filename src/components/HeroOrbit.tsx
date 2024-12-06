import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type THeroOrbitProps = {
    orbit: number;
    rotate: number;
    shouldOrbit?: boolean;
    orbitDuration?: string;
    shouldSpin?: boolean;
};

const HeroOrbit = ({
    children,
    orbit,
    rotate,
    shouldOrbit = false,
    orbitDuration,
    shouldSpin = false
}: PropsWithChildren<THeroOrbitProps>) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
            <div
                className={twMerge(
                    shouldOrbit && "animate-spin"
                )}
                style={{
                    animationDuration: orbitDuration
                }}
            >
                <div
                    className="flex items-start justify-start"
                    style={{
                        width: `${orbit}px`,
                        height: `${orbit}px`,
                        transform: `rotate(${rotate}deg)`,
                    }}
                >
                    <div
                        className={twMerge(
                            shouldSpin && "animate-spin"
                        )}
                        style={{
                            animationDuration: "10s"
                        }}
                    >
                        <div
                            className="inline-flex"
                            style={{
                                transform: `rotate(${rotate * -1}deg)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOrbit;
