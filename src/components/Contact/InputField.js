import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font: ${fonts.body1};
    font-size: .75rem;
`;

const Input = styled.input`
    font: ${fonts.body1};
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 100%;
    resize: none;
    box-sizing: border-box;
    &:focus {
        border: 1px solid ${palette.primary_blue};
    }
`;

function InputField(props) {
    return (
        <Field>
            <Label htmlFor={"txt" + props.name}>{props.name + ":"}</Label>
            <Input name={"txt" + props.name} onKeyUp={props.onKeyUp}></Input>
        </Field>
    );
}

export default InputField;