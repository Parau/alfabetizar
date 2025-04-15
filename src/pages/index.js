import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'A Importância do Nome na Alfabetização',
    imageUrl: 'img/capa-workshop-a-importancia-nome-alfabetizacao.jpg',
    link: '/docs',
    description: (
      <>
        Acesse aqui o <i>PowerBook</i> utilizado no workshop A IMPORTÂNCIA DO NOME NA ALFABETIZAÇÃO.
      </>
    ),
  }/*,
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/capa-workshop-ferramentas-facilitar-uso-o-nome-da-gente.jpg',
    link: '#',
    description: (
      <>
        Acesse aqui o <i>PowerBook</i> utilizado no workshop FERRAMENTAS ESPECIAIS PARA ONDG.
      </>
    ),
  },
  {
    title: 'A Importância do Nome na Alfabetização',
    imageUrl: 'img/capa-powerbook-lenga-lenga.jpg',
    link: '/docs/lenga-lenga/apresentacao',
    description: (
      <>
        Acesse aqui o <i>PowerBook</i> Proposta de atividades usando LENGA-LENGAS.
      </>
    ),
  },*/
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  const linkUrl = useBaseUrl(link);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <Link to={linkUrl}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </Link>
        </div>
      )}
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
