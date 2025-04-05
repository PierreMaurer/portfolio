import Image from "next/image";

export const Reviews = () => {
  return (
      <div className="flex flex-col ms-36 mt-15 me-36 mb-10">
          <hr/>
          <div className="text-5xl mt-15">
              <p>Reviews</p>
          </div>
          <div className="flex flex-col gap-36 mt-20">
              <div className="flex flex-row justify-between">
                  <div className="w-[300px] h-[150px] relative">
                      <Image
                          src={'/img/mycbdapp.jpg'}
                          alt={'Photo of me'}
                          fill
                          style={{objectFit: 'cover'}}
                          className="rounded-3xl"
                      />
                  </div>
                  <div className="w-[60%] flex flex-col gap-5">
                      <p className="font-satoshi-medium text-xl">MyCBDApp</p>
                      <p>Je suis très satisfait du travail de pierre qui à su parfaitement comprendre, exécuter et anticiper les tâches que nous lui avons demandé de réaliser. Pierre est une personne pleine de ressources, enthousiaste et sachant faire preuve d&#39;esprit d&#39;équipe et de prise d&#39;initiative.</p>
                  </div>
              </div>
              <div className="flex flex-row justify-between">
                  <div className="w-[300px] h-[150px] relative">
                      <Image
                          src={'/img/sis67.png'}
                          alt={'Photo of me'}
                          fill
                          style={{objectFit: 'cover'}}
                          className="rounded-3xl"
                      />
                  </div>
                  <div className="w-[60%] flex flex-col gap-5">
                      <p className="font-satoshi-medium text-xl">SIS 67</p>
                      <p>Pierre nous a accompagné dans la mise en place du logiciel LemonLDAP, De bonnes compétences techniques, Le bilan global est positif, et nous lui souhaitons une bonne continuation.</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
