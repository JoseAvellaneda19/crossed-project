import languagesSlice, { setLanguage } from "../../features/languagesSlice";

  it('should handle the changes generated in the language selector', () => {
    const previousState = {
        language: 'EN'
    };
    expect(languagesSlice(previousState, setLanguage('FR'))).toEqual(
      {
        language: 'FR'
      }
    )
  })   
