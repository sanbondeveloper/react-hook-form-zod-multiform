import { useFormContext } from 'react-hook-form';
import Input from '../Input';

function EmailForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Input
        type="email"
        label="email"
        error={errors.email && errors.email.message?.toString()}
        {...register('email', {
          required: '이메일을 입력하세요.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '이메일을 확인하세요.',
          },
        })}
      />
      {/* <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        {...register('email', {
          required: '이메일을 입력하세요.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '이메일을 확인하세요.',
          },
        })}
      />
      <div>{errors.email && <p>{errors.email.message?.toString()}</p>}</div> */}
    </div>
  );
}

export default EmailForm;
