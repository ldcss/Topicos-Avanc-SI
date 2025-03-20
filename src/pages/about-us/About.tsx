export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Sobre Nós
            </h2>
            <div className="grid grid-cols-2 gap-48 items-center">
              <div className="flex flex-col gap-4">
                <img
                  src="https://public.readdy.ai/ai/img_res/5f8d3fb118bbda7711e8c4c4aa1585d5.jpg"
                  alt="Our Team"
                  className="rounded-lg shadow-xl"
                />
                <h2 className="text-2xl font-bold text-center">
                    Lucas Daniel
                </h2>
                <h3 className="text-1xl">
                    Estudante de engenharia da computação e aluno da Apple Developer Academy, apaixonado por tecnologia e inovação.
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src="https://public.readdy.ai/ai/img_res/5f8d3fb118bbda7711e8c4c4aa1585d5.jpg"
                  alt="Our Team"
                  className="rounded-lg shadow-xl"
                />
                <h2 className="text-2xl font-bold text-center">
                    Marcelo Vinicius
                </h2>
                <h3 className="text-1xl">
                    Estudante de engenharia da computação, apaixonado por resolver problemas.
                </h3>
              </div>
            </div>
          </div>
    )
}