import React from "react"
import ChoiceBar from "../ChoiceBar/ChoiceBar";
import styles from "./Voting.module.css"


export default function Voting({vote: initialVote}) {
    const [vote, setVote] = React.useState(initialVote);

    const totalVotes = vote.choices.reduce((prev, current) => prev + current.count, 0);

    function registerChoice(choice) {
        setVote({
            ...vote,
            choices:
            vote.choices.map(c => choice.id !== c.id ? c : {...choice, count: choice.count + 1}
            )
        });
    }

    return (
        <div className={`${styles.Row} ${styles.VotingRow} ${styles.Spacer}`}>
            <div className={styles.Head}>
                <h1 className={styles.Title}>
                    {vote.title}
                    <div className={styles.Badge}>
                        {totalVotes} Votes
                    </div>
                </h1>
                <div className={`${styles.Description} ${styles.Emphasis}`}>
                    {vote.description}
                </div>
            </div>
            <div>
                {vote.choices.map(choice =>
                    <ChoiceBar
                        key = {choice.id}
                        title = {choice.title}
                        count={choice.count}
                        percent={choice.count * (100 / totalVotes)}
                        onClickHandler={() => registerChoice(choice)}
                    />
                )}
            </div>
        </div>
    );
}