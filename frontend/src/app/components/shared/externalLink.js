import React from 'react';
import PropTypes from 'prop-types';

export default function ExternalLink(props) {
    const {url, children} = props;
    return <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>;
}

ExternalLink.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};