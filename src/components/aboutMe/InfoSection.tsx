export const InfoSection = () => {
  return (
    <section className="w-full p-20 flex flex-col text-justify justify-center items-center">
      <h1 className="text-5xl text-white font-bold pb-5">About Me</h1>
      <p className="text-white pl-10 pb-7">
        Hello! I'm Chames Dinuka, an undergraduate pursuing a Bachelor of Science (Honors)
        in Computer Science at the University of Kelaniya in Sri Lanka. Currently, I'm delving
        into C programming and Docker to expand my technical repertoire. I'm passionate about
        Python and always eager to discuss and share knowledge on this versatile language.
        I'm enthusiastic about collaborating on projects that challenge my skills and contribute
        to meaningful technological advancements. Feel free to reach out if you'd like to discuss Python,
        development, or potential collaborations.
      </p>
      <button className="bg-amber-800 text-white text-l font-bold py-2 px-8">
        Download CV
      </button>
    </section>
  );
}