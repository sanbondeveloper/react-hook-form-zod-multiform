import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Step, useMultiForm } from '../../hooks/useMultiForm';
import { Button, Header } from './styles';
import AcquisitionForm from '../AcquisitionForm';
import EmailForm from '../EmailForm';
import NicknameForm from '../NicknameForm';
import PasswordForm from '../PasswordForm';

const steps: Step<FormData>[] = [
  {
    name: 'email',
    title: '이메일',
    element: <EmailForm />,
  },
  {
    name: ['confirm-password', 'password'],
    title: '비밀번호',
    element: <PasswordForm />,
  },
  {
    name: 'nickname',
    title: '닉네임',
    element: <NicknameForm />,
  },
  {
    name: 'acquisition',
    title: '경로',
    element: <AcquisitionForm />,
  },
];

export interface FormData {
  email: string;
  password: string;
  'confirm-password': string;
  nickname: string;
  acquisition: {
    google: boolean;
    friend: boolean;
    other: boolean;
  };
}

function MultiForm() {
  const methods = useForm<FormData>({ mode: 'onBlur' });
  const {
    currentStepIndex,
    currentTitle,
    currentStep,
    isLastStep,
    prev,
    next,
  } = useMultiForm({ steps });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header>
          <Button type="button" onClick={prev}>
            prev
          </Button>
          <h1>{currentTitle}</h1>
          <Button
            type={isLastStep ? 'submit' : 'button'}
            onClick={async () => {
              const result = await methods.trigger(
                steps[currentStepIndex]['name']
              );

              if (result) {
                next();
              }
            }}
          >
            next
          </Button>
        </Header>

        <div>{currentStep}</div>
      </form>
    </FormProvider>
  );
}

export default MultiForm;
