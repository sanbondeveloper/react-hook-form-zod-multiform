import { useFormContext } from 'react-hook-form';

function AcquisitionForm() {
  const { register } = useFormContext();

  return (
    <fieldset>
      <legend>How did you find us?</legend>
      <div>
        <input
          type="checkbox"
          id="google"
          {...register('acquisition.google')}
        />
        <label htmlFor="google">Google</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="friend"
          {...register('acquisition.friend')}
        />
        <label htmlFor="friend">Referred by friend</label>
      </div>

      <div>
        <input type="checkbox" id="other" {...register('acquisition.other')} />
        <label htmlFor="other">Other</label>
      </div>
    </fieldset>
  );
}

export default AcquisitionForm;
