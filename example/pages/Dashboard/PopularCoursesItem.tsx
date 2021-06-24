import * as Icon from 'react-feather';

import { IconButton, Media, StatsDesc } from '../../../.';

interface PopularCoursesItemProps {
  number: number | string;
  title: string;
  thumbnail: string;
  participant_count: number;
  principle: string;
}

export default function PopularCoursesItem({
  number,
  title,
  thumbnail,
  participant_count,
  principle,
}: PopularCoursesItemProps) {
  return (
    <Media>
      <Media.Number>{number}</Media.Number>
      <Media.Thumbnail alt={title} src={thumbnail} />
      <Media.Body className="flex items-center">
        <div className="flex-1">
          <Media.Title>{title}</Media.Title>
          <Media.Desc className="flex justify-between">
            <StatsDesc
              icon={<Icon.User />}
              text={`${participant_count} Participants`}
            />
            <StatsDesc icon={<Icon.Tag />} text={principle} />
          </Media.Desc>
        </div>
        <IconButton
          as="a"
          className="ml-6"
          href="#"
          rounded={false}
          variant="outlined"
        >
          <Icon.ChevronRight />
        </IconButton>
      </Media.Body>
    </Media>
  );
}
