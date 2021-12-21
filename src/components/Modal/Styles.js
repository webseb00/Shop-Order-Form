import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    transition: opacity .4s linear;

    &.modal-visible {
        opacity: 1;
        pointer-events: initial;
    }

    &.modal-invisible {
        opacity: 0;
        pointer-events: none;
    }
`;

export const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
`;

export const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform:  translate(-50%, -50%);
    border-radius: 5px;
    width: 100%;
    max-width: 44rem;
    min-width: 30rem;
    background: white;
    padding: 2rem;
`;

export const Content = styled.div`
.login-modal {
    button {
        margin-top: 1rem;
    }
}

.login-modal_title {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 500;
}

.discount-modal {
	text-align: center;
	margin-top: 2rem;

	div:first-child {
		margin-bottom: 1.6rem;
	}

	input {
		text-align: center;
	}
}
`;

export const CloseModal = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;

    svg {
        display: block;
        font-size: 3rem;
    }
`;