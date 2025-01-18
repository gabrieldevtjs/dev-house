"use client";
import Image from "next/image";
import { use, useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex w-full">
      <aside className="border-r-2 hidden sm:flex w-full max-w-[200px] min-h-screen relative bg-white flex-col px-2 py-5 items-center">
        <div className="fixed">
          <div className="w-full">
            <h1 className="text-blue-600 text-3xl font-bold pl-2">VittaLar</h1>
          </div>
          <nav className="flex flex-col mt-8 w-full gap-5 items-center">
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            >
              Aluguel
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            >
              Compra
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            >
              Serviços
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300"
            >
              Contatos
            </a>
          </nav>

        </div>
        
        <button className="w-11 h-11 rounded-full bg-gray-100 fixed z-30 bottom-5 left-4 hover:bg-gray-300 duration-200">
          <i className="fa fa-phone"></i>
        </button>
      </aside>

      <main className="w-full flex flex-col pb-4 ">
        <header className="bg-white w-full py-5 px-3 flex flex-row items-center justify-between">
          <div className="flex items-center bg-slate-100 px-3 py-2 w-full max-w-xs lg:max-w-[50%] rounded-lg lg:mr-8">
            <i className="fa fa-search text-gray-500"></i>
            <input
              type="text"
              className="w-full bg-slate-100 px-2 outline-none"
              placeholder="Procurando apartamento?"
            />
          </div>

          <div className="flex gap-3 items-center">
            <Image
              src={"/assets/user.svg"}
              alt="iconUser"
              width={30}
              height={30}
              className="hidden sm:flex"
            ></Image>

            <button className="bg-blue-600 hover:bg-blue-600 duration-300 text-white hidden sm:flex items-center justify-center gap-2 px-4 rounded">
              <span className="md:flex ml-2">Sign In</span>
              <i className="fa fa-user md:ml-1"></i>
            </button>

            <button
              id="btn-open"
              className="sm:hidden flex items-center justify-center px-2 py-2"
            >
              <i className="fa fa-bars"></i>
            </button>

            <button onClick={toggleMenu} className="text-2xl sm:hidden mr-3">
              {menu ? "✖" : "☰"}
            </button>
          </div>
        </header>

        <div className="sm:hidden">
          <div
            className={`${
              menu ? "flex" : "hidden"
            } p-4 w-full border bg-white`}
          >
            <nav className="w-full flex flex-col items-center font-bold">
              <ul className="flex flex-col items-center">
                <li className="border-b-4 border-blue-500 w-max p-3">
                  <a href="#homee" className="hover:text-blue-700">
                    ALUGUEL
                  </a>
                </li>
                <li className="border-b-4 border-blue-500 w-max p-3">
                  <a href="#sobre" className="hover:text-blue-700">
                    COMPRA
                  </a>
                </li>
                <li className="border-b-4 border-blue-500 w-max p-3">
                  <a href="#skills" className="hover:text-blue-700">
                    SERVIÇOS
                  </a>
                </li>
                <li className="border-b-4 border-blue-500 w-max p-3">
                  <a href="#projetos" className="hover:text-blue-700">
                    CONTATOS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <section className="w-full px-3 lg:px-6">
          <div className="flex w-full items-baseline justify-between">
            <h1 className=" text-3xl mt-4 mb-6 font-semibold hidden sm:flex">Compre ou alugue</h1>
            <span className="hidden md:block text-gray-600">
              100 casas encontradas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Campo Grande - MS</p>
                    </div>
                  </div>

                  <img
                    src="assets/1.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento grande</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 3.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 2.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">100 mts -</span>
                <span className="font-medium text-sm">3 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/2.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/3.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/4.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/5.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/6.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/3.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/1.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>

            <a
              href="#"
              className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-xl duration-300"
            >
              <div>
                <div className="group overflow-hidden rounded-lg">
                  <div className="absolute z-40 top-5 left-5">
                    <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-3 px-3 py-1 rounded-full">
                      <i className="fa fa-map"></i>
                      <p className="font-medium text-sm">Meia Praia - SC</p>
                    </div>
                  </div>

                  <img
                    src="assets/3.jpg"
                    alt="Casa"
                    className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300"
                  />
                </div>

                <div className="w-full flex flex-col gap-1 my-2">
                  <h2 className="text-lg font-bold">Apartamento praia</h2>
                  <div>
                    <p className="text-gray-600 line-through text-sm">
                      R$ 5.000/mês
                    </p>
                    <p className="my-1 font-bold text-indigo-500">
                      R$ 3.200/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <span className="font-medium text-sm">160 mts -</span>
                <span className="font-medium text-sm">4 quartos -</span>
                <span className="font-medium text-sm">2 banheiros</span>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
