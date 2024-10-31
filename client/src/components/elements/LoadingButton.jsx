/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const LoadingButton = ({ text = "Loading...", disabled = true }) => {
    return (
        <Button disabled={disabled}>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {text}
        </Button>
    );
};

export default LoadingButton;
