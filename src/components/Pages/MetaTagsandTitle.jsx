import React from 'react'
import { Helmet } from 'react-helmet';

function MetaTagsandTitle(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title}: Rank Higher, Sell More</title>
        <meta  name="description" content={`Our ${props.title} services drive results. Gain visibility, attract customers, and thrive online with tailored strategies.`} />
        <link rel="canonical" href={props.link}/>
      </Helmet>
    </div>
  )
}

export default MetaTagsandTitle;
