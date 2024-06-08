import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
    name: ['confirmPassword', 'password'],
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

const FormSchema = z
  .object({
    email: z.string().email({ message: '이메일 형식에 맞게 입력해주세요.' }),
    password: z.string().min(6, { message: '비밀번호는 6글자 이상입니다.' }),
    confirmPassword: z
      .string()
      .min(6, { message: '비밀번호는 6글자 이상입니다.' }),
    nickname: z.string(),
    acquisition: z.object({
      google: z.boolean(),
      friend: z.boolean(),
      other: z.boolean(),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type FormData = z.infer<typeof FormSchema>;

function MultiForm() {
  const methods = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(FormSchema),
  });
  const {
    currentStepIndex,
    currentTitle,
    currentStep,
    isLastStep,
    prev,
    next,
  } = useMultiForm({ steps });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(methods.formState.errors);

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
