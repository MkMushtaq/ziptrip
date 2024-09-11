import React from 'react';
import { User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface FractionalUsersIconProps {
    fillPercentage: number;
    size?: number;
    color?: string;
    className?: string;
    eventAttendance: number;
}

export const FractionalUsersIcon: React.FC<FractionalUsersIconProps> = ({
    fillPercentage,
    size = 24,
    color = "currentColor",
    className = "",
    eventAttendance
}) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className={`relative inline-block mr-4 ${className}`}>
                    <User size={size} color={color} strokeOpacity={0.3} />
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(${100 - fillPercentage}% 0 0 0)` }}
                    >

                        <User
                            size={size}
                            fill={color}
                            color={color}
                        />

                        <p>Add to library</p>


                    </div>
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>{eventAttendance}</p>
            </TooltipContent>
        </Tooltip>
    );
};