import Typewriter from 'typewriter-effect';

export default function Typewriterfuntion() {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString('Developer')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Designer')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Coder')
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
            }}
        />
    );
}
