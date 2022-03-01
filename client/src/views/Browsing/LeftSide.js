import { NavStyle } from './LeftSide.style';
import { motion, useCycle } from 'framer-motion';
import MenuToggle from '../../components/MenuToggle';
import { useRef } from 'react';
import { useDimensions } from '../../Hooks/useDimensions';

const LeftSide = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2}px at 40px 40px)`,
            transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: 'circle(30px at 40px 40px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };
    const contentVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <NavStyle
            ref={containerRef}
            initial={false}
            custom={height}
            animate={isOpen ? 'open' : 'closed'}
        >
            <motion.div className="background" variants={sidebar} />
            {isOpen ? (
                <motion.div
                    className="items-nav"
                    initial="hidden"
                    animate="show"
                    variants={contentVariant}
                >
                    <motion.div variants={item}>hello</motion.div>
                </motion.div>
            ) : null}
            <MenuToggle toggle={() => toggleOpen()} />
        </NavStyle>
    );
};

export default LeftSide;
