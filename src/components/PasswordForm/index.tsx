import { useFormContext } from 'react-hook-form';
import Input from '../Input';

function PasswordForm() {
  const {
    register,
    formState: { errors },
    // watch,
  } = useFormContext();

  /*
    {
          required: '비밀번호 확인을 입력하세요.',
          validate: (value) =>
            value === watch('password') || '비밀번호가 다릅니다.',
        }

        {
          required: '비밀번호를 입력하세요.',
          minLength: { value: 6, message: '6글자 이상 입력하세요.' },
        }
  */

  return (
    <div>
      <Input
        type="password"
        label="password"
        error={errors.password && errors.password.message?.toString()}
        {...register('password')}
      />
      <Input
        type="password"
        label="confirmPassword"
        error={
          errors['confirmPassword'] &&
          errors['confirmPassword'].message?.toString()
        }
        {...register('confirmPassword')}
      />

      {/* <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        {...register('password', {
          required: '비밀번호를 입력하세요.',
          minLength: { value: 6, message: '6글자 이상 입력하세요.' },
        })}
      />
      <div>
        {errors.password && <p>{errors.password.message?.toString()}</p>}
      </div> */}

      {/* <div>
        <label htmlFor="confirm-password">comfirm-password</label>
        <input
          type="password"
          id="confirm-password"
          {...register('confirm-password', {
            required: '비밀번호 확인을 입력하세요.',
            validate: (value) =>
              value === watch('password') || '비밀번호가 다릅니다.',
          })}
        />
        <div>
          {errors['confirm-password'] && (
            <p>{errors['confirm-password'].message?.toString()}</p>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default PasswordForm;
