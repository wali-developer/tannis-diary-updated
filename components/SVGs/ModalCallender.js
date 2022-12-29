import React from 'react';

const ModalCallender = () =>
{
    return (
        <svg
            width={ 24 }
            height={ 24 }
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path fill="url(#a)" d="M0 0h24v24H0z" />
            <defs>
                <pattern
                    id="a"
                    patternContentUnits="objectBoundingBox"
                    width={ 1 }
                    height={ 1 }
                >
                    <use xlinkHref="#b" transform="scale(.01)" />
                </pattern>
                <image
                    id="b"
                    width={ 100 }
                    height={ 100 }
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
}

export default ModalCallender;
