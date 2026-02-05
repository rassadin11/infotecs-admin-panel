import React from 'react';
import { Flex, Typography } from 'antd';
import { UserProps } from '@entities/user/model/types';
import { AvatarStyles, CardStyles } from './styles';
import dayjs from 'dayjs';

export const UserCardInfo = ({ name, avatar, createdAt, isOpen }: UserProps) => {
    return (
        <CardStyles>
            <Flex align='start' gap={16}>
                <AvatarStyles
                    size={40}
                    src={avatar}
                    alt={`${name}'s avatar`}
                    onClick={() => isOpen(true)}
                />
                <div>
                    <Typography.Paragraph strong style={{ margin: 0, cursor: 'pointer' }}
                        onClick={() => isOpen(true)}>{name}</Typography.Paragraph>
                    <Typography.Paragraph style={{ margin: 0, color: '#8B8A8F' }}>Зарегистирован {dayjs(createdAt, "MM.DD.YYYY").format('DD.MM.YYYY')}</Typography.Paragraph>
                </div>
            </Flex>
        </CardStyles>
    );
};