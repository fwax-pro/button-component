import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Button.scss';

const Button = ({
    disableShadow,
    disabled,
    variant,
    size,
    color,
    startIcon,
    endIcon,
    children, 
    onClick
}) => {
    let prefix = null;
    if (startIcon) {
        prefix = <FontAwesomeIcon icon={startIcon} />
        color = 'primary';
    }
    let suffix = null;
    if (endIcon) {
        suffix = <FontAwesomeIcon icon={endIcon} />
        color = 'primary';
    }

    if(disableShadow) {
        color = 'primary';
    }

    return (
        <button 
            disabled={disabled}
            className={`btn ${variant} ${disableShadow ? 'disableShadow' : null } ${color} ${size}`}
            onClick={onClick}
        >
            {prefix} {children} {suffix}
        </button>
    );
} 
;

export default Button;