import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Soup } from "lucide-react"
import NumberLoader from "./NumberLoader"

interface FoodModalProps {
    eventNumber: number
}

export function FoodModal({ eventNumber }: FoodModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Soup />
            </DialogTrigger>
            <DialogContent className="md:max-w-[425px] max-w-[325px]">
                <DialogHeader>
                    <DialogTitle>Impacting Industries</DialogTitle>
                    <DialogDescription>
                        Some stats around the industries that are being impacted by the event!
                    </DialogDescription>
                </DialogHeader>
                <NumberLoader endValue={eventNumber} />
                <div>text</div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
