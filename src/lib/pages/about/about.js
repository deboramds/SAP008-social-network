

export default async () => {
    const container = document.createElement('div');
    const template = `
<h1>Apresentando a Guest Star Supernova: a rede social definitiva para artistas do rock!</h1><br>

<p>A Guest Star Supernova é uma plataforma inovadora projetada exclusivamente para artistas, músicos e entusiastas do rock. Nosso objetivo é trazer o rock de volta ao seu merecido lugar no apogeu da música, proporcionando um espaço virtual vibrante onde os amantes desse gênero podem se reunir, compartilhar suas músicas, vídeos e informações, além de interagir com uma comunidade apaixonada pelo rock.

Com a Guest Star Supernova, você terá a oportunidade de: <br>

Divulgar sua música: Mostre seu talento para um público engajado e receptivo. Carregue suas faixas, vídeos e álbuns, e deixe que os fãs do rock descubram e apreciem o seu som autêntico. Compartilhe suas composições originais, covers e até mesmo registros ao vivo de suas performances inesquecíveis.<br>

Conectar-se com outros artistas: Estabeleça conexões valiosas com outros músicos e bandas de rock. Colabore em projetos musicais conjuntos, troque experiências, compartilhe dicas e truques e desenvolva relacionamentos profissionais duradouros. Juntos, podemos revitalizar a cena do rock e celebrar o legado desse gênero icônico.<br>

Aprender e crescer: Explore nosso rico acervo de informações sobre o rock. Descubra histórias fascinantes sobre os pioneiros do gênero, leia entrevistas exclusivas com artistas influentes e atualize-se com as últimas notícias da cena musical do rock. Além disso, oferecemos recursos educacionais para ajudá-lo a aprimorar suas habilidades musicais e expandir sua compreensão do rock em todas as suas vertentes.<br>

Engajar-se com a comunidade: Participe de fóruns de discussão temáticos, debates apaixonados sobre a história do rock, análises de álbuns clássicos e novidades. Comente e compartilhe publicações de outros membros, descubra novas bandas e artistas promissores e compartilhe seus pensamentos sobre os rumos do rock atual.<br>

Acreditamos que o rock é um gênero atemporal, que transcende gerações e continua a influenciar artistas em todo o mundo. É por isso que é tão importante trazer o rock de volta ao apice da cultura musical. A RockConnect busca revitalizar o espírito do rock, reunindo artistas e fãs em uma plataforma dinâmica e empolgante, onde todos podem celebrar essa forma de expressão poderosa e autêntica.<br>

Então, junte-se a nós na RockConnect e faça parte dessa comunidade apaixonada pelo rock. Vamos reacender a chama, compartilhar nossas paixões e levar o rock de volta ao seu merecido lugar no topo da indústria musical. Juntos, podemos fazer a diferença e escrever um novo capítulo na história do rock. Let's rock!</p>


`
container.innerHTML = template;

return container;
};
