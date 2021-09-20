import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Media } from '../src';

describe('Media', () => {
  it('renders a thumbnail', () => {
    const { getByRole } = render(
      <Media>
        <Media.Thumbnail
          src="https://picsum.photos/200/300"
          alt="Descriptive text about the image"
        />
        <Media.Body>
          <Media.Title>Title</Media.Title>
          <Media.Desc>Write some description here...</Media.Desc>
        </Media.Body>
        <Media.Number>67</Media.Number>
      </Media>
    );
    const thumbnail = getByRole('img') as HTMLImageElement;

    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail.src).toBe('https://picsum.photos/200/300');
    expect(thumbnail.alt).toBe('Descriptive text about the image');
  });

  it('renders a title', () => {
    const { getByRole } = render(
      <Media>
        <Media.Thumbnail
          src="https://picsum.photos/200/300"
          alt="Descriptive text about the image"
        />
        <Media.Body>
          <Media.Title>Title</Media.Title>
          <Media.Desc>Write some description here...</Media.Desc>
        </Media.Body>
        <Media.Number>67</Media.Number>
      </Media>
    );
    const title = getByRole('heading');

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Title');
  });

  it('renders a description', () => {
    const { getByText } = render(
      <Media>
        <Media.Thumbnail
          src="https://picsum.photos/200/300"
          alt="Descriptive text about the image"
        />
        <Media.Body>
          <Media.Title>Title</Media.Title>
          <Media.Desc>Write some description here...</Media.Desc>
        </Media.Body>
        <Media.Number>67</Media.Number>
      </Media>
    );

    expect(getByText('Write some description here...')).toBeInTheDocument();
  });

  it('renders a number', () => {
    const { getByText } = render(
      <Media>
        <Media.Thumbnail
          src="https://picsum.photos/200/300"
          alt="Descriptive text about the image"
        />
        <Media.Body>
          <Media.Title>Title</Media.Title>
          <Media.Desc>Write some description here...</Media.Desc>
        </Media.Body>
        <Media.Number>67</Media.Number>
      </Media>
    );

    expect(getByText('67')).toBeInTheDocument();
  });
});
