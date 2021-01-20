import React, { useEffect, useRef } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const toastRef = useRef<HTMLDivElement>(null);

  const { removeToast } = useToast();

  useEffect(() => {
    toastRef.current?.addEventListener('animationend', () => {
      removeToast(message.id);
    });
  }, [removeToast, message.id]);

  return (
    <Container
      id={message.id}
      ref={toastRef}
      hasDescription={!!message.description}
      type={message.type}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {!!message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
