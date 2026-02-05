import React from 'react';
import { Flex, Typography } from 'antd';
import dayjs from 'dayjs';
import { AvatarStyles, CardStyles } from './styles';
import { UserCardProps } from '../model/types';

export const UserCardInfo = ({ name, avatar, createdAt, onClick }: UserCardProps) => {
    return (
        <CardStyles>
            <Flex align='start' gap={16}>
                <AvatarStyles
                    size={40}
                    src={avatar}
                    alt={`${name}'s avatar`}
                    onClick={onClick}
                />
                <div>
                    <Typography.Paragraph strong style={{ margin: 0, cursor: 'pointer' }}
                        onClick={onClick}>{name}</Typography.Paragraph>
                    <Typography.Paragraph style={{ margin: 0, color: '#8B8A8F' }}>Зарегистирован {dayjs(createdAt, "MM.DD.YYYY").format('DD.MM.YYYY')}</Typography.Paragraph>
                </div>
            </Flex>
        </CardStyles>
    );
};