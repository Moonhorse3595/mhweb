import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '更多我的博客',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我的博客會是分享我各個筆記或其他的內容，會不定期更新，歡迎來看看!
        例如點擊上方的blog，就可以看到了!
      </>
    ),
  },
  {
    title: '使用React框架',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        react是現在一個非常流行的前端框架，模板使用react開發的，多添加md編寫blog，讓我可以更快的更新內容
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
