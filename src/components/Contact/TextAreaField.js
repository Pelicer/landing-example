import styled from 'styled-components';
import palette from '../../assets/style/palette.module.scss';
import fonts from '../../assets/style/fonts.module.scss';

const Field = styled.div`
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 3;
`;

const Label = styled.label`
    font: ${fonts.body1};
    font-size: .75rem;
`;

const TextArea = styled.textarea`
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
            <TextArea name={"txt" + props.name} onKeyUp={props.onKeyUp}></TextArea>
        </Field>
    );
}

export default InputField;